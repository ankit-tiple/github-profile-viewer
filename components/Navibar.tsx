export default function Navibar() {
  return (
    <>
      <nav className="flex justify-around">
        <div className="flex">
          <div>logo</div>
          <section>Github Profile Viewer</section>
        </div>
        <input placeholder="Enter GitHub username..."></input>
      </nav>
    </>
  );
}
