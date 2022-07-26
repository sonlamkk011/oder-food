import "./Cart.scss";





const Cart = () => {
    return(
        <>
        <div id="cart">
            <div className="container">
            <div className="app-wrapper">
  <div className="app-content pt-3 p-md-3 p-lg-4">
    <div className="container-xl">
      <div className="row g-3 mb-4 align-items-center justify-content-between">
        <div className="col-auto">
          <h1 className="app-page-title mb-0">Orders</h1>
        </div>
        <div className="col-auto">
          <div className="page-utilities">
            <div className="row g-2 justify-content-start justify-content-md-end align-items-center">
              <div className="col-auto">
                <form className="table-search-form row gx-1 align-items-center">
                  <div className="col-auto">
                    <input
                      type="text"
                      id="search-orders"
                      name="searchorders"
                      className="form-control search-orders"
                      placeholder="Search"
                    />
                  </div>
                  <div className="col-auto">
                    <button type="submit" className="btn app-btn-secondary">
                      Search
                    </button>
                  </div>
                </form>
              </div>
              {/*//col*/}
              <div className="col-auto">
                <select className="form-select w-auto">
                  <option selected="" value="option-1">
                    All
                  </option>
                  <option value="option-2">This week</option>
                  <option value="option-3">This month</option>
                  <option value="option-4">Last 3 months</option>
                </select>
              </div>
              <div className="col-auto">
                <a className="btn app-btn-secondary" href="#">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-download me-1"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                    />
                  </svg>
                  Download CSV
                </a>
              </div>
            </div>
            {/*//row*/}
          </div>
          {/*//table-utilities*/}
        </div>
        {/*//col-auto*/}
      </div>
      {/*//row*/}
      <nav
        id="orders-table-tab"
        className="orders-table-tab app-nav-tabs nav shadow-sm flex-column flex-sm-row mb-4"
      >
        <a
          className="flex-sm-fill text-sm-center nav-link active"
          id="orders-all-tab"
          data-bs-toggle="tab"
          href="#orders-all"
          role="tab"
          aria-controls="orders-all"
          aria-selected="true"
        >
          All
        </a>
        <a
          className="flex-sm-fill text-sm-center nav-link"
          id="orders-paid-tab"
          data-bs-toggle="tab"
          href="#orders-paid"
          role="tab"
          aria-controls="orders-paid"
          aria-selected="false"
        >
          Paid
        </a>
        <a
          className="flex-sm-fill text-sm-center nav-link"
          id="orders-pending-tab"
          data-bs-toggle="tab"
          href="#orders-pending"
          role="tab"
          aria-controls="orders-pending"
          aria-selected="false"
        >
          Pending
        </a>
        <a
          className="flex-sm-fill text-sm-center nav-link"
          id="orders-cancelled-tab"
          data-bs-toggle="tab"
          href="#orders-cancelled"
          role="tab"
          aria-controls="orders-cancelled"
          aria-selected="false"
        >
          Cancelled
        </a>
      </nav>
      <div className="tab-content" id="orders-table-tab-content">
        <div
          className="tab-pane fade show active"
          id="orders-all"
          role="tabpanel"
          aria-labelledby="orders-all-tab"
        >
          <div className="app-card app-card-orders-table shadow-sm mb-5">
            <div className="app-card-body">
              <div className="table-responsive">
                <table className="table app-table-hover mb-0 text-left">
                  <thead>
                    <tr>
                      <th className="cell">Order</th>
                      <th className="cell">Product</th>
                      <th className="cell">Customer</th>
                      <th className="cell">Date</th>
                      <th className="cell">Status</th>
                      <th className="cell">Total</th>
                      <th className="cell" />
                    </tr>
                  </thead>
                  <tbody>
                   
                   
                    <tr>
                      <td className="cell">#15344</td>
                      <td className="cell">
                        <span className="truncate">
                          Cơm rang dưa bò
                        </span>
                      </td>
                      <td className="cell">Lam Son</td>
                      <td className="cell">
                        <span className="cell-data">16-10</span>
                        <span className="note">01:16 AM</span>
                      </td>
                      <td className="cell">
                        <span className="badge bg-success">Hoàn Thành</span>
                      </td>
                      <td className="cell">35.000</td>
                      <td className="cell">
                        <a className="btn-sm app-btn-secondary" href="/">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="cell">#15343</td>
                      <td className="cell">
                        <span className="truncate">
                          Bánh mì xúc xích
                        </span>
                      </td>
                      <td className="cell">Lam Son</td>
                      <td className="cell">
                        <span className="cell-data">16-10</span>
                        <span className="note">8:07 PM</span>
                      </td>
                      <td className="cell">
                        <span className="badge bg-success">Hoàn Thành</span>
                      </td>
                      <td className="cell">20.000</td>
                      <td className="cell">
                        <a className="btn-sm app-btn-secondary" href="/">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="cell">#15342</td>
                      <td className="cell">
                        <span className="truncate">Phở bò</span>
                      </td>
                      <td className="cell">Lam Son</td>
                      <td className="cell">
                        <span className="cell-data">16-10</span>
                        <span className="note">04:23 PM</span>
                      </td>
                      <td className="cell">
                        <span className="badge bg-danger">Hủy</span>
                      </td>
                      <td className="cell">40.000</td>
                      <td className="cell">
                        <a className="btn-sm app-btn-secondary" href="#">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="cell">#15341</td>
                      <td className="cell">
                        <span className="truncate">
                          Sting vàng
                        </span>
                      </td>
                      <td className="cell">Lam Son</td>
                      <td className="cell">
                        <span className="cell-data">16-10</span>
                        <span className="note">11:18 AM</span>
                      </td>
                      <td className="cell">
                        <span className="badge bg-success">Hoàn Thành</span>
                      </td>
                      <td className="cell">12.000</td>
                      <td className="cell">
                        <a className="btn-sm app-btn-secondary" href="#">
                          View
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*//table-responsive*/}
            </div>
            {/*//app-card-body*/}
          </div>
          {/*//app-card*/}
          <nav className="app-pagination">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a
                  className="page-link"
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Previous
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
          {/*//app-pagination*/}
        </div>
        {/*//tab-pane*/}
        <div
          className="tab-pane fade"
          id="orders-paid"
          role="tabpanel"
          aria-labelledby="orders-paid-tab"
        >
          <div className="app-card app-card-orders-table mb-5">
            <div className="app-card-body">
              <div className="table-responsive">
                <table className="table mb-0 text-left">
                  <thead>
                    <tr>
                      <th className="cell">Order</th>
                      <th className="cell">Product</th>
                      <th className="cell">Customer</th>
                      <th className="cell">Date</th>
                      <th className="cell">Status</th>
                      <th className="cell">Total</th>
                      <th className="cell" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="cell">#15346</td>
                      <td className="cell">
                        <span className="truncate">
                          Lorem ipsum dolor sit amet eget volutpat erat
                        </span>
                      </td>
                      <td className="cell">John Sanders</td>
                      <td className="cell">
                        <span>17 Oct</span>
                        <span className="note">2:16 PM</span>
                      </td>
                      <td className="cell">
                        <span className="badge bg-success">Paid</span>
                      </td>
                      <td className="cell">$259.35</td>
                      <td className="cell">
                        <a className="btn-sm app-btn-secondary" href="#">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="cell">#15344</td>
                      <td className="cell">
                        <span className="truncate">
                          Pellentesque diam imperdiet
                        </span>
                      </td>
                      <td className="cell">Teresa Holland</td>
                      <td className="cell">
                        <span className="cell-data">16 Oct</span>
                        <span className="note">01:16 AM</span>
                      </td>
                      <td className="cell">
                        <span className="badge bg-success">Paid</span>
                      </td>
                      <td className="cell">$123.00</td>
                      <td className="cell">
                        <a className="btn-sm app-btn-secondary" href="#">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="cell">#15343</td>
                      <td className="cell">
                        <span className="truncate">
                          Vestibulum a accumsan lectus sed mollis ipsum
                        </span>
                      </td>
                      <td className="cell">Jayden Massey</td>
                      <td className="cell">
                        <span className="cell-data">15 Oct</span>
                        <span className="note">8:07 PM</span>
                      </td>
                      <td className="cell">
                        <span className="badge bg-success">Paid</span>
                      </td>
                      <td className="cell">$199.00</td>
                      <td className="cell">
                        <a className="btn-sm app-btn-secondary" href="#">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="cell">#15341</td>
                      <td className="cell">
                        <span className="truncate">
                          Morbi vulputate lacinia neque et sollicitudin
                        </span>
                      </td>
                      <td className="cell">Raymond Atkins</td>
                      <td className="cell">
                        <span className="cell-data">11 Oct</span>
                        <span className="note">11:18 AM</span>
                      </td>
                      <td className="cell">
                        <span className="badge bg-success">Paid</span>
                      </td>
                      <td className="cell">$678.26</td>
                      <td className="cell">
                        <a className="btn-sm app-btn-secondary" href="#">
                          View
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*//table-responsive*/}
            </div>
            {/*//app-card-body*/}
          </div>
          {/*//app-card*/}
        </div>
        {/*//tab-pane*/}
        <div
          className="tab-pane fade"
          id="orders-pending"
          role="tabpanel"
          aria-labelledby="orders-pending-tab"
        >
          <div className="app-card app-card-orders-table mb-5">
            <div className="app-card-body">
              <div className="table-responsive">
                <table className="table mb-0 text-left">
                  <thead>
                    <tr>
                      <th className="cell">Order</th>
                      <th className="cell">Product</th>
                      <th className="cell">Customer</th>
                      <th className="cell">Date</th>
                      <th className="cell">Status</th>
                      <th className="cell">Total</th>
                      <th className="cell" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="cell">#15345</td>
                      <td className="cell">
                        <span className="truncate">
                          Consectetur adipiscing elit
                        </span>
                      </td>
                      <td className="cell">Dylan Ambrose</td>
                      <td className="cell">
                        <span className="cell-data">16 Oct</span>
                        <span className="note">03:16 AM</span>
                      </td>
                      <td className="cell">
                        <span className="badge bg-warning">Pending</span>
                      </td>
                      <td className="cell">$96.20</td>
                      <td className="cell">
                        <a className="btn-sm app-btn-secondary" href="#">
                          View
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*//table-responsive*/}
            </div>
            {/*//app-card-body*/}
          </div>
          {/*//app-card*/}
        </div>
        {/*//tab-pane*/}
        <div
          className="tab-pane fade"
          id="orders-cancelled"
          role="tabpanel"
          aria-labelledby="orders-cancelled-tab"
        >
          <div className="app-card app-card-orders-table mb-5">
            <div className="app-card-body">
              <div className="table-responsive">
                <table className="table mb-0 text-left">
                  <thead>
                    <tr>
                      <th className="cell">Order</th>
                      <th className="cell">Product</th>
                      <th className="cell">Customer</th>
                      <th className="cell">Date</th>
                      <th className="cell">Status</th>
                      <th className="cell">Total</th>
                      <th className="cell" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="cell">#15342</td>
                      <td className="cell">
                        <span className="truncate">Justo feugiat neque</span>
                      </td>
                      <td className="cell">Reina Brooks</td>
                      <td className="cell">
                        <span className="cell-data">12 Oct</span>
                        <span className="note">04:23 PM</span>
                      </td>
                      <td className="cell">
                        <span className="badge bg-danger">Cancelled</span>
                      </td>
                      <td className="cell">$59.00</td>
                      <td className="cell">
                        <a className="btn-sm app-btn-secondary" href="#">
                          View
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</div>
            </div>

        </div>
        
        </>
    )
}
export default Cart;