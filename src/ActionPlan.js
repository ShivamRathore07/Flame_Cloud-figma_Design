import Main from "./components/Main";
import "./styles.css";

export default function ActionPlan() {
  const data = {
    plans: [
      {
        name: "Marketing",
        subComp: [
          {
            name: "Wordpress",
            pointers: [
              { name: "pointer1" },
              { name: "pointer2" },
              { name: "pointer3" }
            ]
          },
          {
            name: "google drive",
            pointers: [
              { name: "pointer1" },
              { name: "pointer2" },
              { name: "pointer3" }
            ]
          }
        ]
      },
      {
        name: "Design",
        subComp: [
          {
            name: "Wordpress",
            pointers: [
              { name: "pointer1" },
              { name: "pointer2" },
              { name: "pointer3" }
            ]
          },
          {
            name: "google drive",
            pointers: [
              { name: "pointer1" },
              { name: "pointer2" },
              { name: "pointer3" }
            ]
          }
        ]
      },
      {
        name: "Sales",
        subComp: [
          {
            name: "Wordpress",
            pointers: [
              { name: "pointer1" },
              { name: "pointer2" },
              { name: "pointer3" }
            ]
          },
          {
            name: "google drive",
            pointers: [
              { name: "pointer1" },
              { name: "pointer2" },
              { name: "pointer3" }
            ]
          }
        ]
      }
    ]
  };
  return (
    <div className="App">
      <Main data={data} />
    </div>
  );
}
