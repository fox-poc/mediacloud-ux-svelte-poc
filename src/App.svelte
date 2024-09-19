<script>
  // groups and token are being passed in from the root config
  export let groups;
  export let token;
  let fakeChannels = [
    { title: "fake channel", url: "none" },
    { title: "fake channel 2", url: "none" },
  ];
  console.log("groups", groups, "token,", token);
</script>

<img
  src="https://static-00.iconduck.com/assets.00/svelte-icon-426x512-cm99sfkq.png"
  alt="svelte-icon"
  height="150px"
/>

<br />
<br />
<h3>This component is being brought in directly from the styleguide.</h3>
<recently-viewed-channels />
<br />
<br />
<h3>
  This component is being passed data that the styleguide will map out and
  style.
</h3>
<collection-cards items={fakeChannels} />