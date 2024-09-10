import {
  Button,
  Card,
  Carousel,
  Checkbox,
  Drawer,
  Form,
  Input,
  List,
  message,
  Modal,
  Rate,
  Select,
} from "antd";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { ApiContext } from "../../context";
import { Footer } from "../footer";
import "./home-page.css"
const contentStyle = {
  margin: 0,
  height: "260px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const categoryData = [
  {
    img: "https://promova.com/content/mens_clothing_1f6198db54.png",
    title: "Men's clothing",
    path: "men",
  },
  {
    img: "https://res.cloudinary.com/stitch-fix/image/upload/f_auto,q_auto/v1714409821/landing-pages/pages/US/Sumer%202024%20Refresh/Women/2024_W_Summer_HERO.jpg",
    title: "Women's clothing",
    path: "women",
  },
  {
    img: "https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2021/11/How-to-Save-Money-on-Electronics-in-India.jpg",
    title: "Electronic's",
    path: "elect",
  },
  {
    img: "https://media.istockphoto.com/id/1338646661/photo/gold-jewelry-diamond-rings-show-in-luxury-retail-store-window-display-showcase.jpg?s=612x612&w=0&k=20&c=9VOOm2CteX5ViJVQ58wW8Gl_nyHnrJraegUbIp8Au9I=",
    title: "Jewelery",
    path: "jewelery",
  },
];
const brendData = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5r0_FrSjm2OgttQLwh_CnVCnzbJ7dLv6oA&s",
  },
  {
    image:
      "https://bsmedia.business-standard.com/_media/bs/img/about-page/1562575696.png",
  },
  {
    image: "https://logos-world.net/wp-content/uploads/2020/11/HP-Logo.png",
  },
  {
    image:
      "https://bsmedia.business-standard.com/_media/bs/img/article/2022-12/12/full/1670815387-4729.jpg?im=FeatureCrop,size=(826,465)",
  },
  {
    image: "https://images.acer.com/is/image/acer/logo-acer?$responsive$",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN_IDNO5DqZiheF-gQfUAoGHbWss4-F_m6lA&s",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0bWynDG8OemeyuFRmRoMQPbYO2yaY5LUKqA&s",
  },
];
const shopData = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLAjlEnUc68O9v2y0q3GVecXQeJayJtzm9GA&s",
  },
  {
    image: "https://api.logobank.uz/media/logos_png/texnomart_logo-01.png",
  },
  {
    image: "https://api.logobank.uz/media/logos_png/MEDIAPARK-01.png",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkW8Ti4CRHy3BmyV61qFJ8q04hs1CENezyVQ&s",
  },
];
const { Option } = Select;
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
export const HomePage = () => {
  const navigate = useNavigate();
  const { setCategory, data, setBasket, basket, setIsModalOpen, isModalOpen } =
    useContext(ApiContext);
  const popular = data.filter((item) => item.rating.count > 370);
  const very = data.filter(
    (item) => item.rating.count < 400 && item.rating.count > 200
  );
  const [value, setValue] = useState("");
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="+998">998</Option>
      </Select>
    </Form.Item>
  );
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
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

  const success = () => {
    message.success("Mahsulot savatga qo'shildi!");
  };
  const error = () => {
    message.open({
      type: "error",
      content: "This is an error message",
    });
  };

  const plus = (item) => {
    setBasket((prev) => {
      const updatedBasket = {
        ...prev,
        [item.id]: {
          ...prev[item.id],
          count: prev[item.id].count + 1,
        },
      };
      return updatedBasket;
    });
  };

  const minus = (item) => {
    if (item.count > 0) {
      setBasket((prev) => {
        const updatedBasket = {
          ...prev,
          [item.id]: {
            ...prev[item.id],
            count: prev[item.id].count - 1,
          },
        };
        return updatedBasket;
      });
    }
  };

  let summa = 0;

  Object.values(basket)?.forEach((item) => (summa += item.count * item.price));

  const deleteBasket = (id) => {
    setBasket(Object.values(basket).filter((item) => item.id !== id));
  };
  return (
    <div className="">
      <nav
        style={{ backgroundColor: "#8DD9FF" }}
        class="navbar navbar-expand-lg position-sticky top-0 z-1"
      >
        <div class="container">
          <div style={{cursor:"pointer"}} class="navbar-brand fw-bold" href="#">
            <img style={{width:'100px', height:"40px"}} className="w-100 object-fit-cover rounded-3" src="https://img.freepik.com/premium-vector/delivery-service-font-logo-with-delivery-truck-courier_1639-29659.jpg" />
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
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                onClick={() => {
                  navigate("/cards");
                }}
                class="nav-item"
              >
                <a class="nav-link fw-bold" href="#">
                  All product's
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>

            <div className="d-flex gap-3">
              <button
                onClick={showDrawer}
                className="btn btn-danger"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-cart4"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                </svg>
              </button>
              <button
                onClick={showModal}
                className="btn btn-primary"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Modal
        className="text-center"
        footer={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {value === "kirish" ? (
          <>
            <h3>Telefon raqam orqali kirish</h3>
            <div className="d-flex flex-column gap-3 align-items-center">
              <input className="w-50 rounded p-1" placeholder="Telefon raqam" />
              <input className="w-50 rounded p-1" placeholder="Parol" />
              <button className="w-50 btn btn-primary" type="button">
                Kirish
              </button>
              <button
                onClick={() => {
                  setValue("");
                }}
                className="w-50 btn btn-primary"
                type="button"
              >
                Orqaga
              </button>
              <a className="" href="#">
                Parolni unutdingizmi?{" "}
              </a>
            </div>
          </>
        ) : value === "register" ? (
          <Form
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
              residence: ["zhejiang", "hangzhou", "xihu"],
              prefix: "86",
            }}
            style={{
              maxWidth: 600,
            }}
            scrollToFirstError
            className="mt-4"
          >
            <Form.Item
              name="nickname"
              label="Nickname"
              tooltip="What do you want others to call you?"
              rules={[
                {
                  required: true,
                  message: "Please input your nickname!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                addonBefore={prefixSelector}
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error("Should accept agreement")),
                },
              ]}
              {...tailFormItemLayout}
            >
              <Checkbox>
                I have read the <a href="">agreement</a>
              </Checkbox>
            </Form.Item>
            <Form.Item className="" {...tailFormItemLayout}>
              <Button className="w-50 mb-3" type="primary" htmlType="submit">
                Register
              </Button>
              <br />
              <button
                onClick={() => {
                  setValue("");
                }}
                className="w-50 btn btn-primary"
                type="button"
              >
                Orqaga
              </button>
            </Form.Item>
          </Form>
        ) : (
          <>
            <h3 className="mb-3">Hisobga kirish uchun</h3>
            <div>
              <button
                onClick={() => {
                  setValue("kirish");
                }}
                className="btn btn-primary w-50"
                type="button"
              >
                Kirish
              </button>
              <p className="p-0 m-0 my-3">yoki</p>
              <button
                onClick={() => {
                  setValue("register");
                }}
                className="btn btn-outline-primary w-50 mb-3"
                type="button"
              >
                Ro'yxatdan o'tish
              </button>
            </div>
          </>
        )}
      </Modal>

      <Drawer title="Mahsulotlar" onClose={onClose} open={open} width={500}>
        {basket.length !== 0 ? (
          Object.values(basket).map((item) => (
            <div className="mb-4">
              <div className="d-flex align-items-center gap-3">
                <div style={{ width: "150px", height: "150px" }} className="">
                  <img className="w-100" src={item.image} alt="" />
                </div>
                <div>
                  <p className="fs-5">
                    Name:{" "}
                    <span className="text-info fw-bold">{item?.title}</span>
                  </p>
                  <p className="fs-5">
                    Price:{" "}
                    <span className="text-success fw-bold">{item?.price}</span>{" "}
                    <span>so'm</span>{" "}
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 justify-content-center">
                <button
                  onClick={() => {
                    minus(item);
                  }}
                  type="button"
                  className="btn btn-primary"
                >
                  -
                </button>
                <p className="text-warning p-0 m-0 fs-5 fw-bold">
                  {item?.count}
                </p>
                <button
                  onClick={() => {
                    plus(item);
                  }}
                  type="button"
                  className="btn btn-primary"
                >
                  +
                </button>
                <button
                  onClick={() => {
                    deleteBasket(item.id);
                  }}
                  className="btn btn-danger"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash3-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                  </svg>
                </button>
              </div>
            </div>
          ))
        ) : (
          <h3 className="fw-bold">Savatni to'ldiring</h3>
        )}

        <div className="text-center d-flex align-items-center justify-content-center gap-3 border-top p-2">
          <p className="fs-3">Umumiy summa: </p>
          <p className="fs-5">
            <span className="fw-bold text-success fs-4">{summa}</span> so'm{" "}
          </p>
        </div>
        {basket.length !== 0 ? (
          <button
            onClick={() => {
              navigate("/register");
            }}
            className="btn btn-primary w-100"
            type="button"
          >
            Xarid qilish
          </button>
        ) : (
          ""
        )}
      </Drawer>

      <Carousel className="mt-4 rounded container" arrows infinite={false}>
        <div>
          <img
            className="w-100 rounded"
            style={contentStyle}
            src="https://st2.depositphotos.com/1006899/7664/i/450/depositphotos_76643017-stock-photo-illustration-of-great-sales-and.jpg"
            alt="#"
          />
        </div>
        <div>
          <img
            className="w-100 rounded"
            style={contentStyle}
            src="https://www.parkerpawn.com/wp-content/uploads/2023/08/electronic-gadgets.jpeg"
          />
        </div>
        <div>
          <img
            className="w-100 rounded"
            style={contentStyle}
            src="https://static.independent.co.uk/2024/03/24/07/laptopstech%202.png"
            alt="#"
          />
        </div>
      </Carousel>

      <div className="container">
        <h1 className="my-4">Kategoriyalar</h1>
        <List
          grid={{
            gutter: 16,
            column: 4,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
          }}
          dataSource={categoryData}
          renderItem={(item) => (
            <List.Item>
              <Card
                onClick={() => {
                  navigate("/cards");
                  setCategory(item.path);
                }}
                style={{
                  height: "250px",
                  boxShadow: "0px 0px 21px 0px rgba(34, 60, 80, 0.2)",
                  cursor: "pointer",
                }}
                className="p-0 m-0"
              >
                <div className="">
                  <img
                    style={{ height: "150px" }}
                    className="w-100 rounded"
                    src={item.img}
                    alt="#"
                  />
                </div>
                <p className="mt-3 fw-bold text-black fs-5 pb-2">
                  {item.title}
                </p>
              </Card>
            </List.Item>
          )}
        />
      </div>
      <div className="container">
        <h1 className="my-4">Eng ko'p sotilgan</h1>
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
          className="mt-3"
          dataSource={very}
          renderItem={(item) => (
            <List.Item>
              <Card
                style={{
                  boxShadow: "0px 0px 21px 0px rgba(34, 60, 80, 0.2)",
                  cursor: "pointer",
                }}
                className="h-100vh"
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
                    <p className="">
                      {item.description.slice(0, 25).toLowerCase()}...
                    </p>
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
                    className="btn btn-danger border-0"
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
      </div>

      <div className="container">
        <h1 className="my-4">Eng ommabop</h1>
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
          className="mt-3"
          dataSource={popular}
          renderItem={(item) => (
            <List.Item>
              <Card
                style={{
                  boxShadow: "0px 0px 21px 0px rgba(34, 60, 80, 0.2)",
                  cursor: "pointer",
                }}
                className="h-100vh"
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
                    <p className="">
                      {item.description.slice(0, 25).toLowerCase()}...
                    </p>
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
                      width="16"
                      height="16"
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
      </div>

      <div className="container">
        <h1 className="my-4">Brendlar bo'yicha</h1>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
          }}
          dataSource={brendData}
          renderItem={(item) => (
            <List.Item>
              <Card
                style={{ boxShadow: "0px 0px 21px 0px rgba(34, 60, 80, 0.2)" }}
              >
                <img
                  style={{ height: "80px" }}
                  className="w-100 object-fit-cover"
                  src={item.image}
                />
              </Card>
            </List.Item>
          )}
        />
      </div>

      <div className="container mb-5">
        <h1 className="my-4">Do'konlarimiz</h1>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
          }}
          dataSource={shopData}
          renderItem={(item) => (
            <List.Item>
              <Card
                style={{ boxShadow: "0px 0px 21px 0px rgba(34, 60, 80, 0.2)" }}
              >
                <img
                  style={{ height: "80px" }}
                  className="w-100 object-fit-cover"
                  src={item.image}
                />
              </Card>
            </List.Item>
          )}
        />
      </div>
      <Footer />
    </div>
  );
};
