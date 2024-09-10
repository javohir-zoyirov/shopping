import { Card, List, message, Rate } from "antd";
import { useContext, useState } from "react";
import { ApiContext } from "../../context";
import { useNavigate } from "react-router";
import { Footer } from "../footer";

export const Cards = () => {
  const navigate = useNavigate();
  const [searchvalue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const { data, category, setBasket } = useContext(ApiContext);
  const about = (id) => {};
  const success = () => {
    message.success("Mahsulot savatga qo'shildi!");
  };
  const error = () => {
    message.open({
      type: "error",
      content: "This is an error message",
    });
  };
  const addToBasket = (item) => {
    setBasket((prev) => ({
      [item.id]: {
        ...item,
        count: 1,
      },
      ...prev,
    }));
  };

  const filterData = data
    .filter((item) =>
      item.category.toLowerCase().includes(filterValue.toLowerCase())
    )
    .filter((item) =>
      item.category.toLowerCase().includes(category.toLowerCase())
    )
    .filter(
      (item) =>
        item.title.toLowerCase().includes(searchvalue.toLowerCase()) ||
        item.description.toLowerCase().includes(searchvalue.toLowerCase())
    );
  return (
    <div className="">
      <nav
        style={{ backgroundColor: "#8DD9FF" }}
        class="navbar navbar-expand-lg position-sticky position-sticky top-0 z-1"
      >
        <div class="container">
          <div
            style={{ cursor: "pointer" }}
            class="navbar-brand fw-bold"
            href="#"
            onClick={()=>{navigate("/")}}
          >
            <img
              style={{ width: "100px", height: "40px" }}
              className="object-fit-cover rounded-3"
              src="https://img.freepik.com/premium-vector/delivery-service-font-logo-with-delivery-truck-courier_1639-29659.jpg"
            />
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-5 me-auto mb-2 gap-3 mb-lg-0">
              <li
                onClick={() => {
                  navigate("/");
                }}
                class="nav-item"
              >
                <a class="nav-link fw-bold" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li
                onClick={() => {
                  setFilterValue("men");
                }}
                class="nav-item"
              >
                <a class="nav-link fw-bold" href="#">
                  Men's clothing
                </a>
              </li>
              <li
                onClick={() => {
                  setFilterValue("elect");
                }}
                class="nav-item"
              >
                <a class="nav-link fw-bold" href="#">
                  Electronics
                </a>
              </li>
              <li
                onClick={() => {
                  setFilterValue("women");
                }}
                class="nav-item"
              >
                <a class="nav-link fw-bold" href="#">
                  Women's clothing
                </a>
              </li>
              <li
                onClick={() => {
                  setFilterValue("jewelery");
                }}
                class="nav-item"
              >
                <a class="nav-link fw-bold">Jewelery</a>
              </li>
            </ul>

            <input
              onChange={(e) => setSearchValue(e.target.value)}
              class="rounded p-1 me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </div>
      </nav>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 5,
          xxl: 3,
        }}
        className="mt-3 container h-100"
        dataSource={filterData}
        renderItem={(item) => (
          <List.Item>
            <Card
              style={{
                boxShadow: "0px 0px 21px 0px rgba(34, 60, 80, 0.2)",
                cursor: "pointer",
                height:"100%"
              }}
            >
              <div
                onClick={() => {
                  navigate(`/product/${item.id}`);
                }}
              >
                <div className="">
                  <img
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "200px",
                    }}
                    className="w-100"
                    src={item.image}
                    alt="#"
                  />
                </div>
                <div className="mt-3">
                  <p className="p-0 m-0 text-primary fs-5">$ {item.price}</p>
                  <p className="">{item.title.slice(0, 25).toLowerCase()}...</p>
                  <Rate disabled defaultValue={item.rating.rate} />
                  <p className="mt-2 fs-5 p-0">
                    {item.rating.count} ta buyurtma
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <button
                  onClick={() => {
                    addToBasket(item);
                    success();
                  }}
                  type="button"
                  className="btn border-0 btn-danger"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-cart-plus-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0" />
                  </svg>
                </button>
              </div>
            </Card>
          </List.Item>
        )}
      />
      <Footer />
    </div>
  );
};
