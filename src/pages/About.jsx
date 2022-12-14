import { Link, Outlet } from 'react-router-dom';

export const About = () => {
  return (
    <main>
      <h1>About us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
        veritatis? Omnis atque ea consectetur adipisci beatae consequatur
        voluptates aspernatur voluptatum doloremque ad blanditiis cupiditate
        itaque est ducimus recusandae quod eligendi, nostrum quisquam eos.
        Facilis, libero repellendus omnis corporis esse consequuntur magnam enim
        id culpa cupiditate. Eveniet officia aperiam fugiat doloribus, eos nam
        alias deleniti reprehenderit iusto sit accusamus enim id nobis quas
        consectetur nostrum, laudantium rerum nihil ut corrupti voluptas
        architecto excepturi perferendis illo. Perferendis facere dolore, sint
        nisi rem assumenda fugiat maiores ea quos error dolorum dignissimos
        quisquam qui maxime corporis accusamus nemo. Aliquid asperiores corporis
        eius voluptatem deserunt.
      </p>
      <ul>
        <li>
          <Link to="mission">Read more about mission</Link>
        </li>
        <li>
          <Link to="team">Get to know the team</Link>
        </li>
        <li>
          <Link to="reviews">Go through the reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};
