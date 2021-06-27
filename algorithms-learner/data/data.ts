import { AlgorithmT } from "../types";
import img1 from "../assets/images/01.jpg";
import img2 from "../assets/images/02.jpg";

const data: AlgorithmT[] = [
  {
    id: 1,
    name: "Decision Tree",
    description:
      "Decision support tool that uses a tree-like model of decisions and their possible consequences," +
        " including chance event outcomes, resource costs, and utility. " +
        "It is one way to display an algorithm that only contains conditional control statements",
    image: img1,
    url: "https://forestofdreams.github.io/decision-tree/"
  },
  {
    id: 2,
    name: "EM Algorithm",
    description:
      "Iterative method to find (local) maximum " +
        "likelihood or maximum a posteriori (MAP) estimates of parameters in statistical models, " +
        "where the model depends on unobserved latent variables. ",
    image: img2,
    url: "https://forestofdreams.github.io/em/"
  },
];

export default data;
