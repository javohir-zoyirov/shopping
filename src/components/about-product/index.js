import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ApiContext } from "../../context";
import {
  Button,
  Card,
  Checkbox,
  Form,
  Input,
  List,
  message,
  Rate,
  Select,
  Modal,
} from "antd";
import { Footer } from "../footer";

const { Option } = Select;
const tailFormItemLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 16, offset: 8 },
  },
};

export const AboutProduct = () => {
  const { id } = useParams();
  const { data, isModalOpen, setIsModalOpen, setBasket } =
    useContext(ApiContext);
  const [value, setValue] = useState("");
  const data2 = data.slice(0, 10)?.filter((item) => item?.id != id);
  let productData = data?.find((item) => item?.id == id);
  const navigate = useNavigate();

  const success = () => {
    message.success("Mahsulot savatga qo'shildi!");
  };

  const error = () => {
    message.error("This is an error message");
  };

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
      <Select style={{ width: 70 }}>
        <Option value="998">998</Option>
      </Select>
    </Form.Item>
  );

  const addToBasket = (item) => {
    setBasket((prev) => ({
      [item.id]: {
        ...item,
        count: 1,
      },
      ...prev,
    }));
  };

  return (
    <div>
      <nav
        style={{ backgroundColor: "#8DD9FF" }}
        className="navbar navbar-expand-lg position-sticky top-0 z-1"
      >
        <div className="container">
          <div
            style={{ cursor: "pointer" }}
            class="navbar-brand fw-bold"
            href="#"
            onClick={()=>{navigate('/')}}
          >
            <img
              style={{ width: "100px", height: "40px" }}
              className="w-100 object-fit-cover rounded-3"
              src="https://img.freepik.com/premium-vector/delivery-service-font-logo-with-delivery-truck-courier_1639-29659.jpg"
            />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                onClick={() => {
                  navigate("/cards");
                }}
                className="nav-item"
              >
                <a className="nav-link active" aria-current="page" href="#">
                  All product's
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>

            <Modal
              className="text-center"
              footer={null}
              visible={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              {value === "kirish" ? (
                <>
                  <h3>Telefon raqam orqali kirish</h3>
                  <div className="d-flex flex-column gap-3 align-items-center">
                    <input
                      className="w-50 rounded p-1"
                      placeholder="Telefon raqam"
                    />
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
                  style={{ maxWidth: 600 }}
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
                      style={{ width: "100%" }}
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
                            : Promise.reject(
                                new Error("Should accept agreement")
                              ),
                      },
                    ]}
                    {...tailFormItemLayout}
                  >
                    <Checkbox>
                      I have read the <a href="">agreement</a>
                    </Checkbox>
                  </Form.Item>
                  <Form.Item className="" {...tailFormItemLayout}>
                    <Button
                      className="w-50 mb-3"
                      type="primary"
                      htmlType="submit"
                    >
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

            <div className="d-flex gap-3">
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
      <h1 className="container mx-auto">{productData?.title}</h1>
      <div className="container mx-auto">
        <div className="row">
          <div className="col-md-8 col-12">
            <div className="p-3">
              <Card
                style={{ width: "100%" }}
                cover={
                  <img
                    className="w-50"
                    alt="example"
                    src={productData?.image}
                  />
                }
              >
                <div className="d-flex justify-content-between">
                  <h4>{productData?.title}</h4>
                  <h4>{productData?.price} UZS</h4>
                </div>
                <p>{productData?.description}</p>
                <div className="d-flex justify-content-between">
                  <Rate disabled defaultValue={productData?.rating?.rate} />
                  <button
                    onClick={() => {
                      addToBasket(productData);
                      success();
                    }}
                    className="btn btn-primary"
                  >
                    Savatga qo'shish
                  </button>
                </div>
              </Card>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <List
              itemLayout="horizontal"
              dataSource={data2}
              renderItem={(item) => (
                <List.Item
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    navigate(`/product/${item?.id}`);
                  }}
                >
                  <List.Item.Meta
                    avatar={
                      <img
                        className="rounded"
                        width={70}
                        alt="example"
                        src={item?.image}
                      />
                    }
                    title={<a>{item?.title}</a>}
                    description={item?.price + " UZS"}
                  />
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
