const el = [
  document.querySelector("#smallSupport"),
  document.querySelector("#support"),
  document.querySelector(".google-revocation-link-placeholder"),
  ...document.querySelectorAll(".ad"),
];

for (const element of el)
  if (element != null)
    element.remove();
