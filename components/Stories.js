import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Paul Maliakel",
    src: "https://media-exp1.licdn.com/dms/image/C5603AQFoD5cDW6zp9A/profile-displayphoto-shrink_200_200/0/1598563155377?e=1631750400&v=beta&t=eJ4UJlylbHLFTBqffXNrIn7M_UPHVObUFK9H3oqe99w",
    profile:
      "https://media-exp1.licdn.com/dms/image/C5603AQFoD5cDW6zp9A/profile-displayphoto-shrink_200_200/0/1598563155377?e=1631750400&v=beta&t=eJ4UJlylbHLFTBqffXNrIn7M_UPHVObUFK9H3oqe99w",
  },
  {
    name: "Jeff Bezos",
    src: "https://img.welt.de/img/wirtschaft/mobile231393403/2672507387-ci102l-w1024/Amazon-Jeff-Bezos.jpg",
    profile:
      "https://img.welt.de/img/wirtschaft/mobile231393403/2672507387-ci102l-w1024/Amazon-Jeff-Bezos.jpg",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
];
function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
