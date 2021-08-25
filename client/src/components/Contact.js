import React from "react";

function Contact() {
  return (
    <div>
      <h1 className="text-center mt-4">Get in Touch</h1>

      <div className="container">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Your Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Your Name"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Your Email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Your Phone</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Your Phone"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Your Message</label>
            <textarea
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Your Message"
            ></textarea>
          </div>

          <div className="text-center">
            <button type="submit" class="btn btn-primary  m-4">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
