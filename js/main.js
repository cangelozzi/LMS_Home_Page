(() => {

  // VARIABLES
  const courseInfo = document.querySelector('.profPanelText').querySelectorAll('p');
  const imgProf = document.querySelector('#profes');
  const courseDesc = document.querySelector('#courseDesc');
  const courseDetails = document.querySelector('#courseDetails');
  const courseContent = document.querySelector('#courseContent');
  const discussionGroups = document.querySelector('#discussionGroups');


  // FUNCTION

  // add content to paragraphs with Javascript
  function setCourseInfo(data) {
    courseInfo[0].textContent = data.coursename;
    courseInfo[0].innerHTML += ` - <span class="test-primary">${data.coursecode}</span>`;

    courseInfo[1].textContent = `Professor: ${data.profname}`;

    data.classtime.forEach(time => {
      let newTime = `<li><span class="fa fa-clock-o">${time}</span></li>`;
      courseInfo[1].parentElement.querySelector('ul').innerHTML += newTime;
    });

    imgProf.src = `images/${data.profimg}`;

    courseDesc.textContent = data.coursedesc;
    courseDetails.textContent = `${data.coursename} - ${data.coursecode}`;

    let last_element_coursecontent = data.coursecontent.pop();

    data.coursecontent.forEach((e, i) => {
      let el = `<li>${e}</li`;
      courseContent.innerHTML += el;

      if (i === data.coursecontent.length - 1) {
        courseContent.innerHTML += `
        
                    <li><div class="dropdown">
                  <p id='discussionGroups' class="dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown">
             ${last_element_coursecontent}
                  </p>
                  <ul class="dropdown-menu dropdown-menu-right discussionDrop" role="menu" aria-labelledby="dropdownMenu1">
                    <li class="text-muted"><div class="topPanel"><i class="fa fa-caret-up"></i><p>Discussion Groups</p></div></li>
            <li role="presentation"><a role="menuitem" tabindex="-1" href="#"><span class="emptyCircle"></span><p class="listText"><span>some</span><br>text</p></a></li>
            <li role="presentation" class="divider"></li>
            <li role="presentation"><a role="menuitem" tabindex="-1" href="#"><span class="emptyCircle"></span><p <p class="listText"><span>some</span><br>text</p></a></li>
          </ul>
      </div>
      </li>

        `;
      }

    });


  }

  // EVENTS
  setCourseInfo(classData);


})();