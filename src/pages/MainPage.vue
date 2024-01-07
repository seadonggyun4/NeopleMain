<template>
  <main :class="$style.text">
    <SlideSection />
    <TalkNeopleSection />
    <GameSection />
    <EmploymentSection />
    <BlogSection />
  </main>
</template>

<script>
export default {
  name: "MainPage",
};
</script>

<style module>
.text {
  width: 100%;
  background-color: #e2e2e2;
}
</style>
