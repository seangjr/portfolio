import { Work } from "./components/types";
declare module "/components/data/works.json" {
    const value: Work[];
    export default value;
}