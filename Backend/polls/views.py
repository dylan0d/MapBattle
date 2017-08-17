from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt

from .models import Question, Choice

import json


@csrf_exempt
def index(request):
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    context = {'latest_question_list': latest_question_list}
    return render(request, 'polls/index.html', context)

@csrf_exempt
def detail(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, 'polls/detail.html', {'question': question})

@csrf_exempt
def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)

@csrf_exempt
def vote(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    try:
        selected_choice = question.choice_set.get(pk=request.POST['choice'])
    except (KeyError, Choice.DoesNotExist):
        # Redisplay the question voting form.
        return render(request, 'polls/detail.html', {
            'question': question,
            'error_message': "You didn't select a choice.",
        })
    else:
        selected_choice.votes += 1
        selected_choice.save()
        # Always return an HttpResponseRedirect after successfully dealing
        # with POST data. This prevents data from being posted twice if a
        # user hits the Back button.
        response = get_votes(question)
        return HttpResponse(response)
    #HttpResponseRedirect(reverse('polls:results', args=(question.id,)))

@csrf_exempt
def results(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, 'polls/results.html', {'question': question})

@csrf_exempt
def startup(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return HttpResponse(get_votes(question))

def get_votes(question):
    all_votes = question.choice_set.all()
    print (all_votes)
    response = []
    for choice in all_votes:
        response.append({'name':choice.choice_text, 'choice': choice.id, 'votes': choice.votes})
    return json.dumps(response)