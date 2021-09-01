<template>
  <header class="header" :class="{sticky: $route.path === '/' || $route.path.includes('/projects/')}">
    <div class="container">
      <div class="left">
        <g-link :to="{ name: 'home' }" class="home-link">
          <img :alt="settings.site_name"
               class="logo"
               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADG0lEQVRoge2YzWsTQRjGf22jokbxCxQpFIzt2Z5FoZaiUHJTY8H/oH+AQvXeg6I9eO2xUcGqeNGLNw8FpUSxV6ntwY9aqvbDtiH1MJNm8mZ2d3azu0XMAwM7mXee53l33pnsLrTQwv+NNp+x30DW6B8FFn3is8AF4CLQC5wAjuuxr8AXYBp4BbwGln24jgA/jP6K8OKEErBltGsecV3AA2BNxPu1NT2ny4OzIOJLYc0DjAmSN0CHMb4buAOshzAu27rm2GPwZrSWGTcWJYEzFsGXQJ8ee9uEcdneocquT2vI8d4oCQAUQxr5CIyi9kIO2KdbTv82qmPCcD6Mah7gIGrjBYmUgHwI3jyNe8zWprWHpnAA/5W4j6rbsMjouV68Ra0dGyYsIsMx8A5beIsx8NbhFPBHiNyNkf+e4N4AumPkZ1wIvKf+SG0WHcAHoTEeF3kW9a9skg/GRW4gLzSWiWkPDAnimThIPTAjtIaCJrQ7kJ4V/ReiPwjM6+ayMn7xkltqR8IU9XelX4zPGWPzDnx+8f1CayqIzGUFTor+Z9HfMq4rDnx+8bMB2pGwQv1dkRvrkhae1ddB8IvfL7RWI7s2UBGkfu8QqesFlVAhiCAFeL2HBKIAbFJ/N8okn9CGRTPwOJW4gt389dhseuNys9q2O7+J+1Iuiblm++nIcdXiwWklmjUP8MQngccheLyS8PQSh3mAHtQXBWl+AegMyeWcRLeH+UJIwSo6gUeoclrS12HNV+GVRI8ZlAG+i6CbFrKmX+8cYNO4QeNqZqD2P1AGnopJOeM6q0k+kfwxOod6+T9k/HZaxEyiPNdhgMYsD6OMmzWd1j/xL1Qix4BvwtuAbaKtjFZp3IxpP0pIDwvArmqw+ShhK6O9STp1hPQwidrUVsgysrW0V0A2a/lUkaGx3lwTCBKOg2f79KlCPo2Wgef6ehG4pSfuJG5T+6z/DMvpI3EOGKF2Hrs+nye1Am2ol6gR4LwMdqnniohrx74qMi4IrjxecduDSaFdG6m2REoxyQRSQZSvyi5fHlLj+edXoJVACy20sLP4CxgR1IIZt9mkAAAAAElFTkSuQmCC"/>
          Hiohzo
        </g-link>
      </div>
      <nav class="nav right">
        <g-link class="nav__link" to="/journal">Journal</g-link>
        <g-link class="nav__link" to="/contact">Say Hi!</g-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      logo: require("../../static/logo.svg"),
      settings: require("../../data/theme.json")
    }
  }
}
</script>

<style scoped>
.header {
  position: relative;
  height: 6rem;
  z-index: 10;
}

.header.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.header > .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.home-link {
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Input Mono Compressed', monospace;
}

.logo {
  height: 1.5rem;
  padding-right: 1rem;
}

.site-name {
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-decoration: none;
  text-transform: uppercase;
}

.nav > * {
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  margin-top: 4px;
  margin-right: 3rem;
  padding-bottom: 4px;
  border-bottom: 1px solid;
  border-color: transparent;
  transition: border 0.15s;
}

.nav > *:last-of-type {
  margin: 0;
}

.nav > *:hover {
  border-color: inherit;
}

.nav > .active {
  border-color: inherit;
}
</style>
