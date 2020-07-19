import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as actions from '../../actions';
import AddForm from '../../components/AddForm';
import AdminHeader from '../../components/AdminHeader';
import Pagination from '../../components/Pagination';
import ProductAdminItem from '../../components/ProductAdminItem';
import { filterByCategory, searchProduct } from '../../utils';

Admin.propTypes = {
  products: PropTypes.array,
  showModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  fetchProductEdit: PropTypes.func.isRequired,
  clearProductEdit: PropTypes.func.isRequired,
  removeProductRequest: PropTypes.func.isRequired,
  toggleLoading: PropTypes.func.isRequired,
  isAdminAuth: PropTypes.bool,
};

Admin.defaultProps = {
  isAdminAuth: false,
};

function Admin({
  products,
  showModal,
  hideModal,
  fetchProductEdit,
  clearProductEdit,
  removeProductRequest,
  toggleLoading,
  isAdminAuth,
}) {
  const [search, setSearch] = useState('');
  const history = useHistory();
  const [categoryCurrent, setCategoryCurrent] = useState('Computer');
  const [currentPage, setCurrentPage] = useState(0);

  const hadleShowModal = () => {
    showModal(<AddForm hideModal={hideModal} />);
  };

  const handleFetchProductEdit = product => {
    hadleShowModal();
    fetchProductEdit(product);
  };

  const handleSearchProduct = value => {
    setSearch(value);
  };

  const filterProducts = () => {
    let newProducts = [];
    if (categoryCurrent) {
      newProducts = filterByCategory(products, categoryCurrent);
    }
    if (search) {
      newProducts = searchProduct(newProducts, search);
    }
    return newProducts;
  };

  const handleFilterByCategory = category => {
    setCategoryCurrent(category);
  };

  const perPage = 10;
  const total = filterProducts().length / perPage;
  const start = currentPage * perPage;
  const end = start + perPage;

  const renderProducts = () =>
    _.map(
      filterProducts().slice(start, end),
      ({
        id,
        title,
        subTitle,
        images,
        rating,
        price,
        sizes,
        description,
        category,
        sale,
        discountEndTime,
      }) => (
        <ProductAdminItem
          key={id}
          id={id}
          sale={sale}
          title={title}
          subTitle={subTitle}
          images={images}
          rating={rating}
          price={price}
          description={description}
          category={category}
          sizes={sizes}
          showModal={showModal}
          hideModal={hideModal}
          discountEndTime={discountEndTime}
          hadleShowModal={hadleShowModal}
          handleFetchProductEdit={handleFetchProductEdit}
          removeProductRequest={removeProductRequest}
          toggleLoading={toggleLoading}
        />
      ),
    );

  useEffect(() => {
    document.title = 'Admin - Shopping';
    if (!isAdminAuth) {
      history.push('/admin-signin');
    }
  }, [history, isAdminAuth]);

  return (
    isAdminAuth && (
      <Fragment>
        <section
          id="section-admin"
          className="u-margin-top-medium u-margin-bottom-big"
        >
          <AdminHeader
            categoryCurrent={categoryCurrent}
            handleFilterByCategory={handleFilterByCategory}
            handleSearchProduct={handleSearchProduct}
            clearProductEdit={clearProductEdit}
            hadleShowModal={hadleShowModal}
          />
          <div className="row">
            <table>
              <thead>
                {filterProducts().length ? (
                  <tr>
                    <th style={{ width: '12.5%' }}>
                      <h4 className="table-admin__heading table-admin__heading--main">
                        Image
                      </h4>
                    </th>
                    <th style={{ width: '27.5%' }}>
                      <h4 className="table-admin__heading table-admin__heading--main">
                        Title
                      </h4>
                    </th>
                    <th style={{ width: '40%' }}>
                      <h4 className="table-admin__heading table-admin__heading--main">
                        Details
                      </h4>
                    </th>
                    <th style={{ width: '20%' }}>
                      <h4 className="table-admin__heading table-admin__heading--main">
                        Actions
                      </h4>
                    </th>
                  </tr>
                ) : null}
              </thead>
              <tbody>{renderProducts()}</tbody>
            </table>
          </div>
          {total > 1 && (
            <Pagination
              customClass="row pagination"
              total={total}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </section>
      </Fragment>
    )
  );
}

const mapStateToProps = state => ({
  products: state.products,
  isAdminAuth: state.isAdminAuth,
});

export default connect(mapStateToProps, actions)(Admin);
