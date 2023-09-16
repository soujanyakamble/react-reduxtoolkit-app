import React, { useEffect, useState } from "react";
import { useDispatch , useSelector} from "react-redux"
import { BlogAction, getBlogAction } from "../Redux/Action/BlogAction";

export default function Blog() {
    const dispatch = useDispatch()
   const {blogdata}= useSelector(state => state.allBlog)
   console.log(blogdata);
    

  const [data, setdata] = useState({
    username: "saipatil",
    email: "sai@gmail.com",
  });

  const handelpostdata = () => {
    dispatch(BlogAction(data))
  };

  useEffect(() => {
    dispatch(getBlogAction())
  }, [])
  
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
            <div>
              <label for="name" class="form-label">
                UserName
              </label>
              <input
                value={data.username}
                onChange={(e) => setdata({ ...data, username: e.target.value })}
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter Your UserName"
              />
            </div>
            <div>
              <label for="name" class="form-label">
                Email
              </label>
              <input
                value={data.email}
                onChange={(e) => setdata({ ...data, email: e.target.value })}
                type="email"
                class="form-control"
                id="name"
                placeholder="Enter Your Email"
              />
            </div>
            <button
              onClick={handelpostdata}
              type="button"
              class="btn btn-primary mt-2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

