import React from "react";
import { useState } from "react";
import searchMenuIcon from "../../assets/searchIcon.png";
import { useDispatch } from "react-redux";
import { changeSearchIconValue } from "../../redux/Actions/actionCreators";
import { useNavigate } from "react-router-dom";

function MenuSearchIcon() {
  const [inputValue, setValue] = useState("");
  const [inputVisible, setVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  const handleChangeSearch = () => {
    const value = document.querySelector(".searchVal").value;
    if (value.length > 0) {
      dispatch(changeSearchIconValue(value));
      navigate("/catalog");
      setValue("");
    }
    setVisible(!inputVisible);
  };

  return (
    <div>
      <input
        onChange={handleChangeValue}
        value={inputValue}
        className={
          inputVisible ? "searchVal searchInputMenu" : "searchVal invisible"
        }
      ></input>
      <img
        onClick={handleChangeSearch}
        className="searchIconMenu"
        src={searchMenuIcon}
        alt=""
      />
    </div>
  );
}

export { MenuSearchIcon };
