const token = ""; //generate token and put here
const baseUrl = "http://pet-shop.buckhill.com.hr/api/v1/";

const fetchWithAuth = (url, options = {}) => {
  options.headers = {
    Authorization: `Bearer ${token}`,
    ...(options.headers || {}),
  };

  return fetch(baseUrl + url, options);
};

const formatDate = (orderDate) => {
  const inputDate = new Date(orderDate);
  const year = inputDate.getFullYear();
  const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
  const day = inputDate.getDate().toString().padStart(2, "0");
  return `${day}-${month}-${year}`;
};

const fetchAllOrders = async () => {
  const url = "orders";

  try {
    const response = await fetchWithAuth(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const orders = data.data;
    const uuids = orders.map((data) => data.uuid);
    getRandomOrderID(uuids);
  } catch (error) {
    console.error("Error fetching all orders:", error);
  }
};

const getRandomOrderID = (uuids) => {
  const randomIndex = Math.floor(Math.random() * uuids.length);
  const orderId = uuids[randomIndex];
  fetchOrderByOrderID(orderId);
};

const fetchOrderByOrderID = async (uuid) => {
  try {
    const url = `order/${uuid}`;
    const response = await fetchWithAuth(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const orderData = data.data;
    const orderDate = formatDate(orderData.created_at);
    const productsData = orderData.products;
    const payment = orderData.payment;
    const amountPaid = payment
      ? Math.floor(Math.random() * orderData.amount) + 1
      : 0;
    const amountDue = orderData.amount - amountPaid;
    console.log({ orderData });
    const order = {
      firstName: orderData.user.first_name,
      middleName: orderData.user.middle_name,
      lastName: orderData.user.last_name,
      orderstatus: orderData.order_status.uuid,
      purchaseId: orderData.uuid,
      products: productsData,
      amountDue: amountDue,
      amountPaid: amountPaid,
      date: orderDate,
      amount: orderData.amount,
    };

    const source = document.getElementById("email-template").innerHTML;
    const template = Handlebars.compile(source);
    const html = template(order);
    document.getElementById("email-template").innerHTML = html;
  } catch (error) {
    console.error("Error fetching order by order ID:", error);
  }
};

fetchAllOrders();
