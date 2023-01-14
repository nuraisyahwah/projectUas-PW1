let vm = new Vue({
    el: '#app',
    data: {
        title: "Data Makanan",
        dataMakanan: null,
        nama_makanan: null,
        deskripsi_makanan: null,

    },
    methods: {

        viewMakanan: function () {
            axios
                .get('https://api-uas-ais.vercel.app/listmakanan')
                .then(response => {
                    console.log(response);
                    this.dataMakanan = response.data
                })
        },
        saveMakanan: function () {
            console.log("Button simpan ditekan");
            let _data = {
                'nama_makanan': this.nama_makanan,
                'deskripsi_makanan': this.deskripsi_makanan
            }
            axios
                .post('https://api-uas-ais.vercel.app/listmakanan', _data)
                .then(Response => {
                    this.viewMakanan();
                })
                .catch(error => {
                    console.log(error);
                })
        },
        deleteMakanan: function (_id) {
            axios
                .delete('https://api-uas-ais.vercel.app/listmakanan/' + _id)
                .then(Response => {
                    this.viewMakanan();
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },
    mounted() {
        axios
            .get("https://api-uas-ais.vercel.app/listmakanan/")
            .then(response => {
                console.log(response);
                this.dataMakanan = response.data
            })
    }
})