import "./Contact.scss";

const Contact = () => {
    return(
        <>
        <div id="contact">
            <div className="container">
            <section className="ftco-section contact-section bg-light">
  <div className="container">
    <div className="row d-flex mb-5 contact-info">
      <div className="w-100" />
      <div className="col-md-3 d-flex">
        <div className="info bg-white p-4">
          <p>
            <span>Address:</span> 
            Lô CX01, Khu đô thị Văn Khê, 
            Phường La Khê, Quận Hà Đông, Hà Nội, Việt Nam
          </p>
        </div>
      </div>
      <div className="col-md-3 d-flex">
        <div className="info bg-white p-4">
          <p>
            <span>Phone:</span> <a href="tel://1234567920">+84 999999999</a>
          </p>
        </div>
      </div>
      <div className="col-md-3 d-flex">
        <div className="info bg-white p-4">
          <p>
            <span>Email:</span>{" "}
            <a href="mailto:info@yoursite.com">metaway@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="col-md-3 d-flex">
        <div className="info bg-white p-4">
          <p>
            <span>Website</span> <a href="#">https://metawayholdings.net/</a>
          </p>
        </div>
      </div>
    </div>
    <div className="row block-9">
      <div className="col-md-6 order-md-last d-flex">
        <form action="#" className="bg-white p-5 contact-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Subject" />
          </div>
          <div className="form-group">
            <textarea
              name=""
              id=""
              cols={30}
              rows={7}
              className="form-control"
              placeholder="Message"
              defaultValue={""}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              defaultValue="Send Message"
              className="btn btn-primary py-3 px-5"
            />
          </div>
        </form>
      </div>
      <div className="col-md-6 d-flex">
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.4895220481994!2d105.76031421534654!3d20.973005686028674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313453edc6904cf9%3A0xef22b602813dd07b!2sMetaway%20Holdings!5e0!3m2!1svi!2s!4v1658550314568!5m2!1svi!2s"
  width={600}
  height={600}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

      </div>
    </div>
  </div>
</section>


            </div>

        </div>
        </>
    )
}
export default Contact;