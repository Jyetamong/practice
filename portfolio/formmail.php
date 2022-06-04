    <form name="contactForm" id="contactForm" action="php/contact.php" method="POST" autocomplete="off" class="clearfix">

    <div id="contactForm_form"  class="form_01">
		<div class="tbl_frm01 tbl_wrap">
			<ul>
				<li>
					<label for="contact_name" class="sound-only">이름 *</label>
					<input type="text" class="frm_input full_input required" id="contact_name" name="contact_name" title="Name" placeholder="NAME">
				</li>
				<li>
					<label for="contact_email" class="sound-only">이메일 *</label>
					<input type="email" class="frm_input full_input required" id="contact_email" name="contact_email" title="Email" placeholder="EMAIL">
				</li>
				<li>
					<label for="contact_subject" class="sound-only">제목 *</label>
					<input type="text" class="frm_input full_input required" id="contact_subject" name="contact_subject" title="Subject" placeholder="SUBJECT">
				</li>
				<li>
					<label for="contact_message" class="sound-only">내용 *</label>
					<textarea id="contact_message" name="contact_message" rows="10" title="Message" spellcheck="false" placeholder="MESSAGE"></textarea>
				</li>
			</ul>
            <div class="btn_confirm">
                <input id="contact_submit" type="submit" class="btn_submit" value="SEND">
            </div>
		</div>
	</div>
	<!-- MESSAGE SENT -->
	<div id="alertOk" class="alert alert-success fade in">
		<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
		<span id="alertOkResponse"><strong>감사합니다!</strong> 빠른 시일 내에 회신드리겠습니다!</span>
	</div>
	<!-- /MESSAGE SENT -->

	<!-- MESSAGE NOT SENT -->
	<div id="alertErr" class="alert alert-danger fade in">
		<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
		<span id="alertErrResponse"><!-- php output --><strong>메일보내기에 실패했습니다.</strong>다시 한 번 확인해 주세요.</span>
	</div>
	<!-- MESSAGE NOT SENT -->



    </form>

<script type="text/javascript" src="js/contact.js"></script>
