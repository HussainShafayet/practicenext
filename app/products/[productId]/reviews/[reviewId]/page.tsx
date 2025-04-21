export default async function ReviewDetails({params}: {params: Promise<{productId: string, reviewId: string} >;}){
    const productId = (await params).productId;
    const reviewId = (await params).reviewId;
    return <h1>this is review {reviewId} for product {productId}.</h1>
}