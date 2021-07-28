export default function Map() {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.892173721146!2d-95.93709798457793!3d41.26768357927535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87938fb60ddc971f%3A0x96eba0e6955d8c9b!2s1415%20Cuming%20St%2C%20Omaha%2C%20NE%2068102!5e0!3m2!1sen!2sus!4v1627473223609!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
        className="w-full h-full object-center object-cover lg:w-full lg:h-full rounded-lg"
      ></iframe>
    </div>
  );
}
