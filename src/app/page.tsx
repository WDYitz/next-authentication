import { SignInButton } from "../components/sign-in-button";

export const Home = () => {
  return (
    <main className="home-page">
      <h2>Home page</h2>
      <div>
        <div>
          <SignInButton className="signin-button" />
        </div>
      </div>
    </main>
  );
};

export default Home;
