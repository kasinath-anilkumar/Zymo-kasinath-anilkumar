import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

export function CancellationPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="m-10">
      <Helmet>
        <link rel="canonical" href="https://zymo.app/cancellation-policy" />
      </Helmet>

      <div className="cancellation-policy-container h-[50vh]  m-5">
        <h1 className="mb-10 text-center">Cancellation Policy</h1>
        <hr />
        
        <p>
        At Zymo, we strive to provide a seamless and transparent experience for all our users. Please note that the cancellation policy for bookings on our platform varies based on the vendor selected at the time of booking. Since different vendors have distinct policies regarding cancellations, refunds, and charges, it is important to carefully review the specific terms associated with your chosen vendor.

        For accurate and up-to-date information on the applicable cancellation policy for your booking, we encourage you to refer to the Zymo mobile app. All relevant details, including refund timelines and any applicable cancellation fees, will be clearly stated within the app for your convenience.

        We appreciate your understanding and look forward to serving you. If you have any further questions or need assistance, please feel free to reach out to our support team.

        Thank you for choosing Zymo!

        Download Zymo Mobile App.

        </p>
        
        {/* <ul>
          <li>For cancellations made 24 hours or more before the scheduled pickup time, there will be a 2% charge.</li>
          <li>For cancellations made between 24-06 hours before the scheduled pickup time, there will be a 50% charge.</li>
          <li>No cancellation is allowed 06 hours before the scheduled pickup time; there will be a 100% charge in case of no show.</li>
        </ul>
        
        <p>
          We hope that our transparent cancellation policy gives you peace of
          mind when booking with Zymo. As always, if you have any questions or
          concerns, please do not hesitate to reach out to us. We are always
          here to help.
        </p> */}
      </div>
    </div>
  );
}

export default CancellationPolicy;