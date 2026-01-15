import { Metadata } from "next"

type Props = {
  params: Promise<{ productId: string }>
}
// Dynamic metadata
export const generateMetadata = async ({ params} : Props): Promise<Metadata> => {
  const {productId} = await params
  return {
    title: `Product ${productId}`
  }
}

export default async function ProductDetail({ params }: Props) {
  const { productId } = await params
  return <h1>Product Detail {productId}</h1>
}
