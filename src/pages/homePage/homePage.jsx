import React, { useEffect, useState } from "react"
import axios from "axios"
import {Link} from 'react-router-dom'
import Search from "components/search"
import Button from "components/button"
import s from "pages/homePage/homepage.module.css"
import Pagination from "components/pagination"

function SpecCard(props) {
   const { name,username } = props.data
  return (
      <Link to={{ pathname:'#'}} >
    <div className={s.card}>
      {/* <div className="content"> */}
      {/* <div className="card-img">
                          <img src={emblemUrl alt={name} />
                        </div> */}
      <div className="card-info">
        <h3>{name}</h3>
        <p>{username}</p>
      </div>
      {/* </div> */}
    </div>
     </Link>
  );
}


export default function HomePage(props) {
  const [data, setData] = useState([])
  
  const url = "https://jsonplaceholder.typicode.com/users"
  const token = ""


  useEffect(async () => {
    await axios
      .get(url, {
        // headers: { "X-Auth-Token": token },
        dataType: "json",
        type: "GET",
      })
      .then((response) => setData(response.data))
      .catch((e) => console.log(e))
  },[])
const specList =data.map(item=><SpecCard data={item}/>)

  return (
    <>
      <div className={s.search}>
        <Search /> <Button text="Найти" />
      </div>
      <div className={s.flex}>
        {specList}
      </div>
      <div style={{ display: "flex", justifyContent: "center", margin: 10 }}>
        <Pagination />
      </div>
    </>
  );
}
