export default function Product(props) {
  return (
    <article key={props.art.id}>
      <h2> {props.art.productdisplayname}</h2>
      <p>
        {" "}
        <strong>Brand </strong> {props.art.brandname}
      </p>
      <p>
        {" "}
        <strong>Category </strong> {props.art.category}
      </p>
      <p>
        {" "}
        <strong>Price </strong>
        {props.art.price} DKK
      </p>
      <div className="button_wrapper">
        <button className="buy">BUY NOW</button>
      </div>
    </article>
  );
}
