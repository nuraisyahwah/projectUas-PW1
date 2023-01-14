let vm = new Vue({
    el: '#app',
    data: {
        title: "Data list pembeli",
        dataPembeli: null,
        loading: true,
        error: false,


        nama: null,
        alamat: null

    },
    methods: {

        viewPembeli: function () {
            axios
                .get('https://api-uas-ais.vercel.app/listpembeli')
                .then(response => {
                    console.log(response);
                    this.dataPembeli = response.data
                })
        },
        savePembeli: function () {
            console.log("Button simpan ditekan");
            let _data = {
                'nama': this.nama,
                'alamat': this.alamat
            }
            axios
                .post('https://api-uas-ais.vercel.app/listpembeli', _data)
                .then(Response => {
                    this.viewPembeli()
                    console.log(response)
                })
                .catch(error => {
                    console.log(error);
                })
        },
        deletePembeli: function (_id) {
            axios
                .delete('https://api-uas-ais.vercel.app/listpembeli/' + _id)
                .then(Response => {
                    this.viewPembeli();
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },
    mounted() {
        axios
            .get("https://api-uas-ais.vercel.app/listpembeli")
            .then(response => {
                console.log(response);
                this.dataPembeli = response.data
            })
    }
})