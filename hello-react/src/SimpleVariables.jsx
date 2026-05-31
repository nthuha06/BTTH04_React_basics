function SimpleVariables() {
    const ten = "Ngọ Thị Thu Hà";
    const tuoi = 19;
    const truong = "Đại học Thủy Lợi";

    return (
        <div style={{ padding: "20px" }}>
            <h1>Xin chào {ten}!</h1>

            <p>Tuổi: {tuoi}</p>

            <p>
                Năm sau: {tuoi + 1}
            </p>

            <p>
                Trường: {truong}
            </p>

            <p>
                Hôm nay là:
                {" "}
                {new Date().toLocaleDateString()}
            </p>
        </div>
    );
}

export default SimpleVariables;