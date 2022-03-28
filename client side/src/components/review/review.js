import React from 'react'

export default function Review() {
  return (
    <>
        <form>
          <div class="text-center">
            <div class="loginbox mx-auto mt-5 w-50 p-5 bg-light border border-2 rounded">
              <h1 class="mb-5">Add a new review</h1>
              <div class="input-group mb-5">
                <input class="form-control" type="text" placeholder="Name" />
              </div>
              <div class="input-group mb-3">
                {/* <span class="input-group-text">Message</span> */}
                <textarea class="form-control" placeholder="Write a view"  type="textarea" />
              </div>
              <button class="btn bg-success rounded border text-white mt-3" type='submit'>submit review</button>
            </div>
          </div>
        </form>
    </>
  )
}
