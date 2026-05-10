import React from "react";
import { Clock, Phone, MapPin } from "lucide-react";

export function Location() {
  return (
    <section
      id="location"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#f8fafb" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Location
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Real Google Map */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              src="https://maps.google.com/maps?q=NV%20The%20Sports%20Physio%20Clinic%20Greater%20Kailash&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col gap-6">
            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: "rgba(13, 148, 136, 0.18)",
                boxShadow: "0 4px 24px rgba(13,148,136,0.10)",
              }}
            >
              {/* Address */}
              <div className="flex items-start gap-4 mb-7">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(13,148,136,0.2)" }}
                >
                  <MapPin size={22} style={{ color: "#0D9488" }} />
                </div>

                <div>
                  <p
                    className="font-semibold uppercase tracking-wider mb-1 text-[16px]"
                    style={{ color: "#0D9488" }}
                  >
                    Clinic Address
                  </p>

                  <p
                    className="text-lg font-bold"
                    style={{ color: "#000" }}
                  >
                    Block S 50, Basement, Greater Kailash Part II,
                    New Delhi 110048
                  </p>

                  <p
                    className="text-sm font-medium mt-1"
                    style={{ color: "#0D9488" }}
                  >
                    Near K R Mangalam School
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 mb-7">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(13,148,136,0.2)" }}
                >
                  <Phone size={22} style={{ color: "#0D9488" }} />
                </div>

                <div>
                  <p
                    className="font-semibold uppercase tracking-wider mb-1 text-[16px]"
                    style={{ color: "#0D9488" }}
                  >
                    Phone
                  </p>

                  <div className="flex items-center gap-3 text-lg font-bold">
                    <a
                      href="tel:+918076372077"
                      className="hover:underline"
                      style={{ color: "#000" }}
                    >
                      +91 80763 72077
                    </a>

                    <span style={{ color: "#000" }}>/</span>

                    <a
                      href="tel:+918377990027"
                      className="hover:underline"
                      style={{ color: "#000" }}
                    >
                      +91 8377990027
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(13,148,136,0.2)" }}
                >
                  <Clock size={22} style={{ color: "#0D9488" }} />
                </div>

                <div>
                  <p
                    className="font-semibold uppercase tracking-wider mb-2 text-[16px]"
                    style={{ color: "#0D9488" }}
                  >
                    Clinic Hours
                  </p>

                  <p
                    className="text-lg font-bold"
                    style={{ color: "#000" }}
                  >
                    Mon to Sat: 8:00 AM to 9:00 PM
                  </p>

                  <p
                    className="text-lg font-bold"
                    style={{ color: "#000" }}
                  >
                    Sunday: 11:30 AM to 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}