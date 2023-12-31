export default function scrollTo (section) {
    document
        .querySelector(section)
        .scrollIntoView({ behavior: "smooth", block: "start" });
};