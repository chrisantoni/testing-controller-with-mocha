
    $.ajax({
        url: "http://localhost:3000/memo",
        method:"GET",
        success: function(result) {
          var temp = ""
          for(var i=0;i<result.length;i++){
            temp +=
            `<tr id="data${result[i].memoID}">
             <td class='memoid'>${result[i].memoID}</td>
             <td class='title'>${result[i].title}</td>
             <td class='notes'>${result[i].notes}</td>
             <td><button type="button" class="btn btn-success" id="update${result[i].memoID}" onclick="edit('${result[i].memoID}')">Update</button>
             <button type="button" class="btn btn-danger" id="delete${result[i].memoID}" onclick="delete_memo('${result[i].memoID}')">Delete</button></td>
             </tr> `
            }
            $('#list_memos').append(temp)
        }
    });

  function create_memo(){
      $.ajax({
          url: "http://localhost:3000/memo",
          method:"POST",
          data:{
                  memoID:$('#memoid').val(),
                  title:$('#title').val(),
                  notes:$('#note').val()
               },
          success: function(result) {
            var temp = `
                <tr id="data${result.memoID}">
                  <td class='memoid'>${result.memoID}</td>
                  <td class='title'>${result.title}</td>
                  <td class='notes'>${result.notes}</td>
                  <td><button type="button" class="btn btn-success" id="update${result.memoID}" onclick="edit('${result.memoID}')">Update</button>
                  <button type="button" class="btn btn-danger" id="delete${result.memoID}" onclick="delete_memo('${result.memoID}')">Delete</button></td>
                </tr>  `
                $('#list_memos').append(temp)
                $('#memoid').val("")
                $('#title').val("")
                $('#note').val("")
          }
      });
  }

  function delete_memo(id){
      $.ajax({
          url: "http://localhost:3000/memo",
          method:"delete",
          data:{
          memoID: id
        },
          success: function(result) {
            $(`#data${id}`).remove()
          }
      });
  }
  function edit(id){
      var memoid_to_edit = $(`tr#data${id} td.memoid`).html()
      var title_to_edit = $(`tr#data${id} td.title`).html()
      var notes_to_edit = $(`tr#data${id} td.notes`).html()
      $('#memoid').val(memoid_to_edit)
      $('#title').val(title_to_edit)
      $('#note').val(notes_to_edit)
      document.getElementById('buttonUpdate').innerHTML = `<button type="button" id="updateData"  class="btn btn-default" onclick="showButton()">Update</button>`
  }
  function showButton(){
    update_memo()
    document.getElementById('buttonUpdate').innerHTML = `<button type="button" id ="create" class="btn btn-default" onclick="create_memo()">Create</button>`
  }

  function update_memo(){
      $.ajax({
          url: "http://localhost:3000/memo",
          method:"put",
          data:{
                  memoID:$('#memoid').val(),
                  title:$('#title').val(),
                  notes:$('#note').val()
               },
          success: function(result) {
            var temp = `
                  <td class='memoid'>${result.memoID}</td>
                  <td class='title'>${result.title}</td>
                  <td class='notes'>${result.notes}</td>
                  <td><button type="button" class="btn btn-success" id="update${result.memoID}"onclick="edit('${result.memoID}')">Update</button>
                  <button type="button" class="btn btn-danger" id="delete${result.memoID}" onclick="delete_memo('${result.memoID}')">Delete</button></td>
                `
            $(`#data${result.memoID}`).html(temp);
            $('#memoid').val("")
            $('#title').val("")
            $('#note').val("")
          }
      });
  }
