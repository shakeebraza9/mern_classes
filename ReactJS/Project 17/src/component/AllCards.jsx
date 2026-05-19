function AllCards({ data }) {
    return (
        <div
            style={{
                marginTop: "40px",
                marginBottom: "40px",
                width: "80%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
                gap: "40px",
                marginLeft: "auto",
                marginRight: "auto",
            }}
        >
            {data.map((singleItem) => (
                <div
                    key={singleItem.id}
                    style={{
                        backgroundColor: "#f87171",
                        width: "25%",
                        maxHeight: "500px",
                        padding: "16px",
                        borderRadius: "16px",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                    }}
                >
                    <img
                        src={singleItem.thumbnail}
                        alt={singleItem.title}
                        style={{
                            width: "100%",
                            height: "70%",
                            aspectRatio: "1 / 1",
                            objectFit: "cover",
                            borderRadius: "16px",
                            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                        }}
                    />

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <h2
                            style={{
                                textAlign: "left",
                                margin: "20px 0",
                                fontSize: "24px",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                            }}
                        >
                            {singleItem.title}
                        </h2>

                        <p
                            style={{
                                fontSize: "40px",
                            }}
                        >
                            ${singleItem.price}
                        </p>
                    </div>

                    <p
                        style={{
                            textAlign: "left",
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                        }}
                    >
                        {singleItem.description}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default AllCards;