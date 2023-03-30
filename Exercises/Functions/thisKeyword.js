const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTag() {
    const self = this;
    this.tags.forEach(function (tag) {
      console.log(self.title, tag);
    });
  },
};

video.showTag();
