const menus = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "details",
        children: [
          {
            label: "Location",
            to: "location",
            children: [
              {
                label: "City",
                to: "city",
              },
            ],
          },
        ],
      },
      {
        label: "Update",
        to: "update",
        children: [
          {
            label: "email",
            to: "email",
            children: [
              {
                label: "name",
                to: "name",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Account",
        to: "account",
      },
      {
        label: "Security",
        to: "security",
        children: [
          {
            label: "Login",
            to: "login",
          },
          {
            label: "Register",
            to: "register",
            children: [
              {
                label: "Random data",
                to: "",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Contacts",
    to: "/contacts",
    children: [
      {
        label: "phone",
        to: "phone",
      },
      {
        label: "address",
        to: "address",
        children: [
          {
            label: "Local address",
            to: "local-address",
          },
          {
            label: "main-address",
            to: "main-address",
            children: [
              {
                label: "Random data",
                to: "",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default menus;
