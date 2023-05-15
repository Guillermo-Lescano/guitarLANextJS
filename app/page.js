import Link from "next/link"
import Layout from "@/components/layout"

export default function Home() {
  return (
    <>
      <Layout title={'Inicio'} description={'Venta de guitarras, blog y mas'}>
        <h1>Hola mundo</h1>
        <Link href="/nosotros">ir a nosotros</Link>
      </Layout>
    </>
  )
}
