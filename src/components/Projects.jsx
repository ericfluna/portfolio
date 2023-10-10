import Project from "./Project";
export default function Projects() {
  return (
    <article
      id="projects"
      className="flex flex-col items-center justify-center align-middle text-center -translate-y-20 pt-36"
    >
      <h1 className="text-2xl lg:text-4xl font-bold break-all">PROJECTOS</h1>

      <div className="flex flex-row flex-wrap items-center justify-center my-10 gap-5 px-2">
        <Project
          image={"/images/cat.svg"}
          link={"/cat-app"}
          icon={true}
          tecnologias={["JavaScript", "React"]}
        />
      </div>
    </article>
  );
}
