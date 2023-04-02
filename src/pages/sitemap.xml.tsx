import axios from "axios"
import { GetServerSideProps } from "next"

import { API_URL, SITE_URL } from "@/supportingTool/constatns"

const Sitemap = () => {}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "text/xml")
  const xml = await generateSitemap()
  res.write(xml)
  res.end()

  return {
    props: {},
  }
}

const generateSitemap = async (): Promise<string> => {
  const animesIds = (
    await axios.get<{ anons: number[]; ongoing: number[]; released: number[] }>(
      API_URL + "/animePage/all",
    )
  ).data

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${SITE_URL}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
    ${animesIds.ongoing
      .map((el) => {
        return `
          <url>
            <loc>${SITE_URL + "/anime/" + el}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
          </url>
        `
      })
      .join("")}
    ${animesIds.released
      .map((el) => {
        return `
          <url>
            <loc>${SITE_URL + "/anime/" + el}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.7</priority>
          </url>
        `
      })
      .join("")}
      ${animesIds.anons
        .map((el) => {
          return `
            <url>
              <loc>${SITE_URL + "/anime/" + el}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.5</priority>
            </url>
          `
        })
        .join("")}
  </urlset>
`
}

export default Sitemap
