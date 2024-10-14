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

      <div className="cancellation-policy-container">
        <h1 className="mb-10 text-center">Cancellation Policy</h1>
        <hr />
        
        <p>
          At Zymo, we understand that sometimes plans change and you may need to
          cancel your reservation. Our cancellation policy is designed with our
          customers in mind and is as follows:
        </p>
        
        <ul>
          <li>For cancellations made 24 hours or more before the scheduled pickup time, there will be a 2% charge.</li>
          <li>For cancellations made between 24-06 hours before the scheduled pickup time, there will be a 50% charge.</li>
          <li>No cancellation is allowed 06 hours before the scheduled pickup time; there will be a 100% charge in case of no show.</li>
        </ul>
        
        <p>
          We hope that our transparent cancellation policy gives you peace of
          mind when booking with Zymo. As always, if you have any questions or
          concerns, please do not hesitate to reach out to us. We are always
          here to help.
        </p>
      </div>
    </div>
  );
}

export default CancellationPolicy;