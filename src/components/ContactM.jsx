export default function ContactM() {
  return (
    <div id="ContactM">
      <p className="title">Un lugar creado por y para mujeres. Club privado de socias.</p>
      <p className="black">Aribau, 226</p>
      <p className="question">¿Quieres saber más sobre nuestras novedades?</p>
      <form>
        <label htmlFor="email">Tu email</label>
        <div>
          <input id="email" placeholder="example@junohouseclub.com" type="email"></input>
          <button type="submit">OK</button>
        </div>
      </form>
      <div className="flex">
        <div className="contact">
          <p>Contacto:</p>
          <p>hola@junohouseclub.com</p>
          <p>+34 626 977 077</p>
        </div>
        <div className="icons">
          <a href="#">
            <img src="/icon-ig.svg" alt="instagram" />
          </a>
          <a href="#">
            <img src="/icon-fb.svg" alt="facebook" />
          </a>
          <a href="#">
            <img src="/icon-in.svg" alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}
