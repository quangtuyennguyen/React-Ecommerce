import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const MemberItem = ({
    image, department, name
}) => {
    const { pathname } = useLocation();
    return (
        <div className="col span_1_of_4">
            <div className="member">
                <div className="member__box-image">
                    <img className="member__img" src={image} alt="" />
                    <ul className="member__social-list">
                        <li className="member__social-item">
                            <Link to={`${pathname}`} className="member__social-link">
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                        </li>
                        <li className="member__social-item">
                            <Link to={`${pathname}`} className="member__social-link">
                                <i className="fab fa-twitter"></i>
                            </Link>
                        </li>
                        <li className="member__social-item">
                            <Link to={`${pathname}`} className="member__social-link">
                            <i className="fab fa-instagram" />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="member__details u-center-text">
                    <span className="member__title member__title--sub">{department}</span>
                    <h5 className="member__title member__title--main">{name}</h5>
                </div>
            </div>
        </div>
    );
}