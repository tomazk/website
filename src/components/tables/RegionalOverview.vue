<template>
  <b-table
    responsive
    bordered
    no-border-collapse
    outlined
    striped
    hover
    sort-by="date"
    :sort-desc="true"
    :sticky-header="tableHeight"
    :items="csvdata"
    :fields="fields"
  >
    <template v-slot:head()="scope">
      <div class="text-nowrap">{{ scope.label }}</div>
    </template>
    <template v-slot:cell(date)="data">
      <div class="text-nowrap">{{ data.item.date | formatDate('dd. MMMM') }}</div>
    </template>
  </b-table>
</template>

<script>
export default {
  props: ["csvdata", "regions", "tableHeight"],
  computed: {
    fields() {
      return [
        {
          key: "date",
          headerTitle: "Datum",
          label: "Datum",
          sortable: true,
          stickyColumn: true,
          variant: "grey"
        },
        ...this.regionsProper,
        {
          key: "region.foreign.todate",
          label: "Tujci"
        }
      ];
    },
    regionsProper() {
      return this.regions
        .filter(region => !["si", "t", "n"].includes(region.id)) //Region slugs don't map to stats data, or we don't want that column
        .map(region => {
          return {
            key: `region.${region.id}.todate`,
            label: region.name
          };
        })
        .sort((region1, region2) => region1.label.localeCompare(region2.label));

    }
  }
};
</script>

<style>
</style>