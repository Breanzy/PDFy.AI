import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        sitemap: "https://pdfyai.vercel.app/sitemap.xml",
        host: "https://pdfyai.vercel.app",
    };
}
