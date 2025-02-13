const team = [
  {
    "id": 1,
    "first_name": "Ibbie",
    "last_name": "Pietersma",
    "job_title": "Front-end Developer",
    "department": "Training",
    "bio": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    "img": "../../assets/images/team-images/image-0.png"
  },
  {
    "id": 2,
    "first_name": "Arlyn",
    "last_name": "Mariaud",
    "job_title": "Front-end Developer",
    "department": "Sales",
    "bio": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    "img": "../../assets/images/team-images/image-1.png"
  },
  {
    "id": 3,
    "first_name": "Lynnelle",
    "last_name": "Jays",
    "job_title": "Back-end Developer",
    "department": "Legal",
    "bio": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    "img": "../../assets/images/team-images/image-2.png"
  },
  {
    "id": 4,
    "first_name": "Sharia",
    "last_name": "Duchateau",
    "job_title": "Android Developer",
    "department": "Sales",
    "bio": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    "img": "../../assets/images/team-images/image-3.png"
  },
  {
    "id": 5,
    "first_name": "Rianon",
    "last_name": "Umbert",
    "job_title": "Front-end Developer",
    "department": "Training",
    "bio": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    "img": "../../assets/images/team-images/image-4.png"
  },
  {
    "id": 6,
    "first_name": "Dimitry",
    "last_name": "Arrighini",
    "job_title": "Back-end Developer",
    "department": "Product Management",
    "bio": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    "img": "../../assets/images/team-images/image-5.png"
  },
  {
    "id": 7,
    "first_name": "Martino",
    "last_name": "Sapauton",
    "job_title": "Scrum Master",
    "department": "Sales",
    "bio": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    "img": "../../assets/images/team-images/image-6.png"
  },
  {
    "id": 8,
    "first_name": "Freedman",
    "last_name": "Camfield",
    "job_title": "Lead Client Team",
    "department": "Services",
    "bio": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    "img": "../../assets/images/team-images/image-7.png"
  },
  {
    "id": 9,
    "first_name": "Opalina",
    "last_name": "Forgie",
    "job_title": "Android Developer",
    "department": "Accounting",
    "bio": "Fusce consequat. Nulla nisl. Nunc nisl.",
    "img": "../../assets/images/team-images/image-8.png"
  },
  {
    "id": 10,
    "first_name": "Weber",
    "last_name": "Scougall",
    "job_title": "Front-end Developer",
    "department": "Human Resources",
    "bio": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    "img": "../../assets/images/team-images/image-9.png"
  },
  {
    "id": 11,
    "first_name": "Justinn",
    "last_name": "Ccomini",
    "job_title": "UI Designer",
    "department": "Product Management",
    "bio": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    "img": "../../assets/images/team-images/image-10.png"
  },
  {
    "id": 12,
    "first_name": "Sande",
    "last_name": "Keepence",
    "job_title": "Back-end Developer",
    "department": "Marketing",
    "bio": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    "img": "../../assets/images/team-images/image-11.png"
  },
  {
    "id": 13,
    "first_name": "Cinderella",
    "last_name": "Brose",
    "job_title": "Commercial Director",
    "department": "Services",
    "bio": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    "img": "../../assets/images/team-images/image-12.png"
  },
  {
    "id": 14,
    "first_name": "Jamal",
    "last_name": "Di Domenico",
    "job_title": "Front-end Developer",
    "department": "Accounting",
    "bio": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    "img": "../../assets/images/team-images/image-13.png"
  },
  {
    "id": 15,
    "first_name": "Eleanor",
    "last_name": "Jeffers",
    "job_title": "UI Designer",
    "department": "Sales",
    "bio": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    "img": "../../assets/images/team-images/image-14.png"
  },
  {
    "id": 16,
    "first_name": "Debera",
    "last_name": "Luesley",
    "job_title": "Technical Support Lead",
    "department": "Services",
    "bio": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "img": "../../assets/images/team-images/image-15.png"
  },
  {
    "id": 17,
    "first_name": "Cobb",
    "last_name": "Brimilcome",
    "job_title": "Technical Support Specialist",
    "department": "Sales",
    "bio": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    "img": "../../assets/images/team-images/image-16.png"
  },
  {
    "id": 18,
    "first_name": "Kristan",
    "last_name": "Tinline",
    "job_title": "Innovation Strategist",
    "department": "Engineering",
    "bio": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    "img": "../../assets/images/team-images/image-17.png"
  },
  {
    "id": 19,
    "first_name": "Corinne",
    "last_name": "Gregoire",
    "job_title": "Data Engineer",
    "department": "Human Resources",
    "bio": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    "img": "../../assets/images/team-images/image-18.png"
  },
  {
    "id": 20,
    "first_name": "Mildrid",
    "last_name": "Curedell",
    "job_title": "Back-end Developer",
    "department": "Product Management",
    "bio": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    "img": "../../assets/images/team-images/image-19.png"
  },
  {
    "id": 21,
    "first_name": "Karissa",
    "last_name": "Drabble",
    "job_title": "Front-end Developer",
    "department": "Product Management",
    "bio": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    "img": "../../assets/images/team-images/image-20.png"
  },
  {
    "id": 22,
    "first_name": "Hymie",
    "last_name": "Hearsum",
    "job_title": "Office Angel 010",
    "department": "Sales",
    "bio": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    "img": "../../assets/images/team-images/image-21.png"
  },
  {
    "id": 23,
    "first_name": "Justen",
    "last_name": "Fernihough",
    "job_title": "Back-end Developer",
    "department": "Marketing",
    "bio": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    "img": "../../assets/images/team-images/image-22.png"
  },
  {
    "id": 24,
    "first_name": "Noel",
    "last_name": "Dominguez",
    "job_title": "Front-end Developer",
    "department": "Product Management",
    "bio": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    "img": "../../assets/images/team-images/image-23.png"
  },
  {
    "id": 25,
    "first_name": "Gussi",
    "last_name": "Dalzell",
    "job_title": "iOS Developer",
    "department": "Research and Development",
    "bio": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    "img": "../../assets/images/team-images/image-24.png"
  },
  {
    "id": 26,
    "first_name": "Lewiss",
    "last_name": "Dowden",
    "job_title": "Front-end Developer",
    "department": "Human Resources",
    "bio": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    "img": "../../assets/images/team-images/image-25.png"
  },
  {
    "id": 27,
    "first_name": "Lars",
    "last_name": "Gerler",
    "job_title": "Front-end Developer",
    "department": "Marketing",
    "bio": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    "img": "../../assets/images/team-images/image-26.png"
  },
  {
    "id": 28,
    "first_name": "Allistir",
    "last_name": "Petracco",
    "job_title": "Back-end Developer",
    "department": "Research and Development",
    "bio": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    "img": "../../assets/images/team-images/image-27.png"
  },
  {
    "id": 29,
    "first_name": "Franni",
    "last_name": "Farlambe",
    "job_title": "Front-end Developer",
    "department": "Training",
    "bio": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    "img": "../../assets/images/team-images/image-28.png"
  },
  {
    "id": 30,
    "first_name": "Porty",
    "last_name": "Lepick",
    "job_title": "Account & Technology Director",
    "department": "Product Management",
    "bio": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    "img": "../../assets/images/team-images/image-29.png"
  },
  {
    "id": 31,
    "first_name": "Haven",
    "last_name": "Cory",
    "job_title": "Cloud Engineer",
    "department": "Business Development",
    "bio": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    "img": "../../assets/images/team-images/image-30.png"
  },
  {
    "id": 32,
    "first_name": "Murdock",
    "last_name": "Willeson",
    "job_title": "UX Lead",
    "department": "Business Development",
    "bio": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    "img": "../../assets/images/team-images/image-31.png"
  },
  {
    "id": 33,
    "first_name": "Cesaro",
    "last_name": "Conry",
    "job_title": "System Operations",
    "department": "Accounting",
    "bio": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    "img": "../../assets/images/team-images/image-32.png"
  },
  {
    "id": 34,
    "first_name": "Alister",
    "last_name": "Litel",
    "job_title": "Scrum Master",
    "department": "Support",
    "bio": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    "img": "../../assets/images/team-images/image-33.png"
  },
  {
    "id": 35,
    "first_name": "Carolina",
    "last_name": "Perfitt",
    "job_title": "Front-end Developer",
    "department": "Accounting",
    "bio": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "img": "../../assets/images/team-images/image-34.png"
  },
  {
    "id": 36,
    "first_name": "Amandie",
    "last_name": "Alford",
    "job_title": "Managing Director",
    "department": "Sales",
    "bio": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    "img": "../../assets/images/team-images/image-35.png"
  },
  {
    "id": 37,
    "first_name": "Rayna",
    "last_name": "Vockins",
    "job_title": "Managing Director",
    "department": "Services",
    "bio": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    "img": "../../assets/images/team-images/image-36.png"
  },
  {
    "id": 38,
    "first_name": "Katuscha",
    "last_name": "Huffer",
    "job_title": "Front-end Developer",
    "department": "Accounting",
    "bio": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    "img": "../../assets/images/team-images/image-37.png"
  },
  {
    "id": 39,
    "first_name": "Pearl",
    "last_name": "Kaine",
    "job_title": "Android Developer",
    "department": "Sales",
    "bio": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    "img": "../../assets/images/team-images/image-38.png"
  },
  {
    "id": 40,
    "first_name": "Ted",
    "last_name": "Lindelof",
    "job_title": "Android Developer",
    "department": "Engineering",
    "bio": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    "img": "../../assets/images/team-images/image-39.png"
  },
  {
    "id": 41,
    "first_name": "Shalne",
    "last_name": "Ince",
    "job_title": "UX/UI Designer",
    "department": "Accounting",
    "bio": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    "img": "../../assets/images/team-images/image-40.png"
  },
  {
    "id": 42,
    "first_name": "Georgeta",
    "last_name": "Ripley",
    "job_title": "UX Designer",
    "department": "Accounting",
    "bio": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    "img": "../../assets/images/team-images/image-41.png"
  },
  {
    "id": 43,
    "first_name": "Jemima",
    "last_name": "Skoggins",
    "job_title": "iOS Developer",
    "department": "Human Resources",
    "bio": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    "img": "../../assets/images/team-images/image-42.png"
  },
  {
    "id": 44,
    "first_name": "Gabie",
    "last_name": "Gwillim",
    "job_title": "Tech Lead",
    "department": "Business Development",
    "bio": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    "img": "../../assets/images/team-images/image-43.png"
  },
  {
    "id": 45,
    "first_name": "Itch",
    "last_name": "McHardy",
    "job_title": "Developer",
    "department": "Legal",
    "bio": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    "img": "../../assets/images/team-images/image-44.png"
  }
];

export default team;
