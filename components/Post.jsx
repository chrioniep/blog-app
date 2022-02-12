function PostCard() {
  return (
    <div className="card w-92 card-bordered card-compact lg:card-normal hover:shadow-xl cursor-pointer transform transition duration-200 ease-out">
      <figure>
        <img src="https://picsum.photos/id/1005/400/250" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          This card is compact only on small screens
        </h2>
        <p>
          Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
          sit necessitatibus veritatis sed molestiae voluptates incidunt iure
          sapiente.
        </p>
      </div>
    </div>
  );
}

export default PostCard;
