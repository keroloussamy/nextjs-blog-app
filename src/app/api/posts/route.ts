import prisma from "@/utils/connect";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const GET = async (req: NextApiRequest) => {
    const { searchParams } = new URL(req.url || "");

    const page = searchParams.get("page");
    const cat = searchParams.get("cat");

    const POST_PER_PAGE = 2;

    const query = {
      take: POST_PER_PAGE,
      skip: POST_PER_PAGE * ((page ? parseInt(page, 10) : 1) - 1),
      where: {
        ...(cat && { catSlug: cat }),
      },
    };
    
    try {
      const [posts, count] = await prisma.$transaction([
        prisma.post.findMany(query),
        prisma.post.count({ where: query.where }),
      ]);
      return new NextResponse(JSON.stringify({ posts, count }), { status: 200 });
    } catch (err) {
      console.log(err);
      return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
    }
};

/**
 * The prisma.$transaction method is used to execute multiple queries.
 */



