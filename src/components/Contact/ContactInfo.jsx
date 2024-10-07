import React from 'react';
import LocationSVG from '../SVGs/Contact/LocationSVG';
import EmailSVG from '../SVGs/Contact/EmailSVG';

const ContactInfo = () => {
    return (
        <div className="ud-contact-content-wrapper">
        <div className="ud-contact-title mb-12 lg:mb-[150px]">
          <span className="mb-6 block text-base font-medium text-dark dark:text-white">
            CONTACT US
          </span>
          <h2 className="max-w-[260px] text-[35px] font-semibold leading-[1.14] text-dark dark:text-white">
            Let's talk about your problem.
          </h2>
        </div>
        <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
          <div className="mb-8 flex w-[330px] max-w-full">
            <div className="mr-6 text-[32px] text-primary">
              <LocationSVG />
            </div>
            <div>
              <h5 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
                Our Location
              </h5>
              <p className="text-base text-body-color dark:text-dark-6">
                401 Broadway, 24th Floor, Orchard Cloud View, London
              </p>
            </div>
          </div>
          <div className="mb-8 flex w-[330px] max-w-full">
            <div className="mr-6 text-[32px] text-primary">
              <EmailSVG />
            </div>
            <div>
              <h5 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
                How Can We Help?
              </h5>
              <p className="text-base text-body-color dark:text-dark-6">
                info@yourdomain.com
              </p>
              <p className="mt-1 text-base text-body-color dark:text-dark-6">
                contact@yourdomain.com
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ContactInfo;