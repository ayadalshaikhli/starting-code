
import type { InferGetStaticPropsType } from "next"
import { getAllProducts } from "@framework/product"
import { getConfig } from "@framework/api/config"
import { HomePage, Layout } from "@components/common"
import { ProductCard } from "@components/product"
import { Grid, Hero, Marquee } from "@components/ui"

export async function getStaticProps() {
  const config = getConfig()
  const products = await getAllProducts(config)

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}

export default function Home({
  products
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <div className="body">
    <HomePage/>
        <div className="flex flex-col sm:flex-col md:flex-row pl-20">
        { products.slice(0,10).map(product =>
          <ProductCard
            key={product.id}
            product={product}
            
          />
      )}
      </div>
      <Hero
       headline="MAANGE Makeup brushes"
       description="MAANGE Makeup brushes set professional with Natural Hair 
       Foundation Powder Eyeshadow Make up Brush Blush 6pcs-20pcs"
      />
      {/* <Marquee>
        { products.slice(0,10).map(product =>
          <ProductCard
            key={product.id}
            variant="slim"
            product={product}
          />
        )}
      </Marquee>
      <Grid layout="B">
        { products.slice(0,3).map(product =>
          <ProductCard
            key={product.id}
            product={product}
          />
      )}
      </Grid>
      <Marquee variant="secondary">
        { products.slice(0,3).map(product =>
          <ProductCard
            key={product.id}
            variant="slim"
            product={product}
          />
        )}
      </Marquee> */}
    </div>
  )
}

Home.Layout = Layout
